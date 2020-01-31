//
//  Taboola.h
//  TaboolaView
//
//  Created by Tzufit Lifshitz on 3/5/19.
//  Copyright © 2019 Taboola. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "PublisherInfo.h"
#import "TaboolaEvent.h"

NS_ASSUME_NONNULL_BEGIN

@interface Taboola : NSObject

+(void)initWithPublisherInfo:(PublisherInfo*)publisherInfo;

/**************
 * Event Handler *
 **************/

/** Sends events to server.
 * @param events - like MobileEvent.
 **/
+(void)reportTaboolaMobileEvent:(NSDictionary *)events eventType:(TaboolaEventType)eventType;

@end

NS_ASSUME_NONNULL_END
