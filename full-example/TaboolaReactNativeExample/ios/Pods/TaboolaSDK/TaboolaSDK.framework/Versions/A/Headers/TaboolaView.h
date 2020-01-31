//
//  Taboola.h
//  TaboolaView
//
//  Created by Tzufit Lifshitz on 10/25/17.
//  Copyright © 2017 Taboola. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "TBLoggerLevel.h"

/**
 This protocol should be implemented by the host app. TaboolaView sends various lifecycle events to the delegate, to allow more flexibility for the host app.
 */
@protocol TaboolaViewDelegate <NSObject>

@optional

/**
 Attaches a delegate to the TaboolaView. Allows intercepting clicks.
 @param clickUrl string representation of URL click.
 @return YES if the view should begin loading content; otherwise, NO. Default value is YES
 */

- (BOOL)onItemClick:(NSString *)placementName withItemId:(NSString *)itemId withClickUrl:(NSString *)clickUrl isOrganic:(BOOL)organic;

/**
 Attaches a delegate to the TaboolaView. Allows intercepting clicks.
 @param pURLString string representation of URL.
 @return YES if the view should begin loading content; otherwise, NO. Default value is YES
 
 Use 'onItemClick: withItemId: withClickUrl: isOrganic:' of this function, which will be deprecated in a future release.
 */
- (BOOL)taboolaViewItemClickHandler:(NSString *)pURLString :(BOOL)isOrganic __attribute__((deprecated("Method is deprecated. Use 'onItemClick: withItemId:withClickUrl:isOrganic:' instead")));

@optional
/**
 Triggered after the TaboolaView is succesfully rendered.
 Use 'taboolaView: didLoadPlacementNamed: didLoadPlacementNamed: withHeight:' instead of this function, which will be deprecated in a future release.
 */
- (void)taboolaView:(UIView*)taboolaView didLoadPlacementNamed:(NSString *) placementName withHeight:(CGFloat)height;

- (void)taboolaDidReceiveAd:(UIView *)view __deprecated_msg("Method is deprecated. Use 'taboolaView: didLoadPlacementNamed: didLoadPlacementNamed: withHeight:' instead");

@optional
/**
 Triggered after the TaboolaView fails to render.
 Use 'taboolaView: didFailToLoadPlacementNamed: withErrorMessage:' instead of this function, which will be deprecated in a future release.
 */
- (void)taboolaView:(UIView*) taboolaView didFailToLoadPlacementNamed:(NSString *) placementName withErrorMessage:(NSString *) error;

- (void)taboolaDidFailAd:(NSError *)error __deprecated_msg("Method is deprecated. Use 'taboolaView:didFailToLoadPlacementNamed::withErrorMessage:' instead");

@optional

- (void)taboolaViewResizedToHeight:(CGFloat)height; __deprecated_msg("Method is deprecated. Use 'taboolaView: didLoadPlacementNamed: didLoadPlacementNamed: withHeight:' instead");

- (void)taboolaView:(UIView*) taboolaView placementNamed:(NSString *) placementName resizedToHeight:(CGFloat)height; __deprecated_msg("Method is deprecated. Use 'taboolaView: didLoadPlacementNamed: didLoadPlacementNamed: withHeight:' instead");
/**
 Triggered when the taboolaView resizes after content render
 Use 'taboolaViewResizedToHeight:' instead of this function, which will be deprecated in a future release.
 */
- (void)taboolaViewResizeHandler __deprecated_msg("Method is deprecated. Use 'taboolaViewResizedToHeight' instead");

/**
 Triggered when the TaboolaView is scrolled to top.
 */
- (void)scrollViewDidScrollToTopTaboolaView:(UIView*)taboolaView;

/**
 Triggered when clicked Save For Later.
 */
- (void)clickedOnAction:(NSNumber*)actionType data:(NSDictionary*)data;

@end

/**
 TaboolaView represents a single Taboola widget.
 */
@interface TaboolaView : UIView
/**
 Mandatory. Sets the publisherId.
 */
@property(nonatomic, strong) NSString *publisher;

/**
 Mandatory. Sets the widget UI mode (template)
 */
@property(nonatomic, strong) NSString *mode;

/**
 Mandatory. Sets the widget placement code (for reporting / configuration purposes)
 */
@property(nonatomic, strong) NSString *placement;

/**
 Mandatory. Sets the page type of the page on which the widget is displayed (one of
 article, photo, video, home, category, search)
 */
@property(nonatomic, strong) NSString *pageType;

/**
 Mandatory. Sets the canonical URL for the page on which the widget is displayed.
 */
@property(nonatomic, strong) NSString *pageUrl;

/**
 Optional. Set the same viewID in different TaboolaView to eneable dedup (default is "current timestamp").
 */

@property(nonatomic, strong) NSString *viewID;

/**
 Optional. Change only if it's specified by your Taboola account manager (default is "mix").
 */

@property(nonatomic, strong) NSString *targetType;

/**
 Optional. Sets the pageId of the page on which the widget is displayed (default is to auto generate from URL).
 */
@property(nonatomic, strong) NSString *pageId;

@property(nonatomic, strong) NSString *progressBarColor;

@property(nonatomic) CGFloat progressBarAnimationTime;

/**
 Optional. Attaches a TaboolaViewDelegate to the TaboolaView. Allows intercepting clicks.
 */
@property(nonatomic, weak) id<TaboolaViewDelegate> delegate;

/**
 Optional. Controls whether the widget content is scrollable or not (default is enabled).
 */
@property(nonatomic, readwrite) BOOL scrollEnable;

/**
 Optional. Controls whether to hide the scrollBar in Taboola views (default is NO).
 */
@property(nonatomic, readwrite) BOOL scrollBarHidden;

/**
 Optional. The in-app browser will be pushed to UIViewController.
 */
@property(nonatomic, weak) UIViewController *ownerViewController;

/**
 Optional. Force legacy UIWebView.
 */
@property(nonatomic, readwrite) BOOL forceLegacyWebView;

/**
 Optional. When enabled, TaboolaView automatically resizes its height after rendering the widget (default is YES).
 */
@property(nonatomic, readwrite) BOOL autoResizeHeight;

/**
 Optional. Sets additional styling CSS rules for the widget. Use it for controling the widget background, for example.
 */
@property(nonatomic, strong) NSString *optionalWidgetStyle;

/**
 Optional. Controls whether item clicks sent to the delegate clickHandler or not. if not they will be opened in Safari (default is YES).
 */
@property(nonatomic, readwrite) BOOL enableClickHandler;

/**
 Optional. Controls the ammount (level) of the console log messages by TaboolaSDK. LogLevel Enum defines importance levels (default is LogLevelError).
 */
@property(nonatomic, readwrite) LogLevel logLevel;

/**
 Optional. Mediation provider.
 */
@property (nonatomic) NSString* mediation;

/**
 Optional. Change the time out of loading widget in seconds (default is 10s).
 */
@property (nonatomic) int timeOutOfLoading;

/**
 Optional. Use to override scrollIntercept.
 */
@property(nonatomic, readwrite) BOOL overrideScrollIntercept;

/**
 In feed, set scrollIntercept to YES (defult is NO).
 */
- (void)setInterceptScroll:(BOOL)scrollIntercept;

/**
 Show progress bar in scroll switch in feed.
 */
- (void)setProgressBarEnabled:(BOOL)progressBarEnabled;

/**
 Set using constraints for TaboolaView (instead of frame)
*/
- (void)setConstraintsOn:(BOOL)useConstraints;

+ (CGFloat) widgetHeight;

/**
 Version of the SDK
 */
+ (NSString*)version;

/**
 Optional. Allows setting additional page commands to the Taboola widget, as used in the Taboola JavaScript API.
 @param pCommands list of commands.
 */
-(void)setOptionalPageCommands:(NSDictionary *)pCommands;

/**
 Optional. Allows setting additional mode commands to the Taboola widget, as used in the Taboola JavaScript API.
 @param pCommands list of commands.
 */
-(void)setOptionalModeCommands:(NSDictionary *)pCommands;


/**
 Resets the TaboolaView - All conents and pushed commands are cleared. new commands must be pushed before fetching data again.
 */
- (void)reset;

/**
 Refreshes the recommendations displayed on the TaboolaView.
 */
- (void)refresh;

/*!
 After initializing the TaboolaView, this method should be called to actually fetch the recommendations
 */
- (void)fetchContent;

/*!
 Show progress bar animation when scrolling in feed. Time in sec.
 */
- (void)startProgressBarAnimation;


- (void)setAction:(NSNumber*)actionType data:(NSString*)data;

- (void)updateAction:(NSNumber*)actionType data:(NSString*)data;

- (void)setUnifiedId:(NSString*)unifiedId __attribute__((deprecated("Method is deprecated. Use 'setOptionalPageCommands:' instead")));


@end
