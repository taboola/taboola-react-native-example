//
//  TBItem.h
//  TaboolaView
//
//  Copyright © 2017 Taboola. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "TBImageView.h"
#import "TBTitleLabel.h"
#import "TBBrandingLabel.h"
#import "TBDescriptionLabel.h"


@class TBItemModel;

@protocol TBPlacementDelegate <NSObject>
-(void)notifyVisibleEvent;
-(void)notifyAvailableEvent;
@end


@interface TBItem : NSObject

@property (nonatomic, weak) id<TBPlacementDelegate> placementDelegate;

- (instancetype)initWithItemModel:(TBItemModel *)model;

//create UIViews manually
- (TBImageView *)thumbnailView;
- (TBImageView *)thumbnailViewCompleted:(void (^)(NSError *, UIImage *))completed;
- (TBTitleLabel *)titleView;
- (TBBrandingLabel *)brandingView;
- (TBDescriptionLabel *)descriptionView;
- (NSDictionary *)extraDataDictionary;

//create UIViews from storyboard
- (void)initTitleView:(TBTitleLabel *)titleLabel;
- (void)initBrandingView:(TBBrandingLabel *)brandingLabel;
- (void)initDescriptionView:(TBDescriptionLabel *)descriptionLabel;
- (void)initThumbnailView:(TBImageView *)imageView;
- (void)initThumbnailView:(TBImageView *)imageView completed:(void (^)(NSError *, UIImage *))completed;

-(void)handleClickEvent;
-(void)notifyVisibleEvent;
-(void)notifyAvailableEvent;

@end
