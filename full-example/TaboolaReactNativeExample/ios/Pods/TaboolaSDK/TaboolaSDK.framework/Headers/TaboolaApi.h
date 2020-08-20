//
//  TaboolaApi.h
//  TaboolaView
//
//  Copyright © 2017 Taboola. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "TBRecommendationRequest.h"
#import "TBRecommendationResponse.h"
#import "TBLoggerLevel.h"


typedef void(^TBRecommendationRequestSuccessCallback)(TBRecommendationResponse *response);
typedef void(^TBRecommendationRequestFailureCallback)(NSError *error);

@protocol TaboolaApiClickDelegate <NSObject>
/** Implement one of the following functions.
 No need to implement them both. */

@optional
- (BOOL)onItemClick:(NSString *)placemetName withItemId:(NSString *)itemId withClickUrl:(NSString *)clickUrl isOrganic:(BOOL)organic  __attribute__((deprecated("Method is deprecated. Use '-(BOOL)onItemClick:(NSString *)placementName withItemId:(NSString *)itemId withClickUrl:(NSString *)clickUrl isOrganic:(BOOL)organic;' instead")));
- (BOOL)onItemClick:(NSString *)placementName withItemId:(NSString *)itemId withClickUrl:(NSString *)clickUrl isOrganic:(BOOL)organic;
- (BOOL)onItemClick:(NSString *)placementName withItemId:(NSString *)itemId withClickUrl:(NSString *)clickUrl isOrganic:(BOOL)organic customData:(NSString *)customData;

@end

@interface TaboolaApi : NSObject

@property (nonatomic, readonly) NSString *apiKey;
@property (nonatomic, readonly) NSString *publisherId;
@property (nonatomic, weak) id<TaboolaApiClickDelegate> clickDelegate;

@property(nonatomic, readwrite) LogLevel logLevel;


//call this method in AppDelegate
- (void)startWithPublisherID:(NSString *)publisherId
                   andApiKey:(NSString *)apiKey;
- (void)fetchRecommendations:(TBRecommendationRequest *)recommendationsRequest
                   onSuccess:(TBRecommendationRequestSuccessCallback)onSuccess
                   onFailure:(TBRecommendationRequestFailureCallback)onFailure;
- (void)getNextBatchForPlacement:(TBPlacement *)placement
                      itemsCount:(NSInteger)count
                       onSuccess:(TBRecommendationRequestSuccessCallback)onSuccess
                       onFailure:(TBRecommendationRequestFailureCallback)onFailure;
+ (instancetype) sharedInstance;

- (void)setOnClickIgnorePeriod:(NSTimeInterval) ignorePeriod;
- (NSTimeInterval)onClickIgnorePeriod;

- (void)handleAttributionClick;

- (void)setExtraPropetries:(NSDictionary*) properties __attribute__((deprecated("Method is deprecated. Use 'setExtraProperties:' instead")));

- (void)setExtraProperties:(NSDictionary*) properties;

- (void)clear;
@end
