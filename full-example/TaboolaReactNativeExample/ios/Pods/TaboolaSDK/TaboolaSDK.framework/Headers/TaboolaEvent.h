//
//  TaboolaEvent.h
//  TaboolaView
//
//  Created by Karen Shaham Palman on 01/07/2019.
//  Copyright © 2019 Taboola. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/**
 ** Event is a general object (abstract) and the publisher should NOT use it
 ** instead, use its subclass (MobileEvent for example)
 **/

enum {
    TaboolaEventTypeDefault, // default type
    TaboolaEventTypeNewsroom
};
typedef NSInteger TaboolaEventType;


@protocol TaboolaEvent <NSObject>

@end

NS_ASSUME_NONNULL_END
