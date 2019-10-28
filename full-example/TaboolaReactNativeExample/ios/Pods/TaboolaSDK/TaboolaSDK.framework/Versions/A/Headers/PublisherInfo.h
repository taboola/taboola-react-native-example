//
//  PublisherInfo.h
//  TaboolaView
//
//  Created by Karen Shaham Palman on 08/07/2019.
//  Copyright © 2019 Taboola. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface PublisherInfo : NSObject

@property(nonatomic, strong) NSString *publisherId;
@property(nonatomic, strong) NSString *apiKey;

-(instancetype)initWithPublisherId:(NSString*)publisherId;

@end

NS_ASSUME_NONNULL_END
