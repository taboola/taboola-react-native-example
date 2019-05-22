# Taboola React Native SDK Example App

This is an example project of how how to implement the Taboola React Native plugin. It is a pretty straightforward integration, but there a few gotchas to watch out for:

- 1. You must make sure to implement all of the event handler props in the **RNTaboolaView** component. If you do not do so, the component will not render and your app will likely crash.

- 2. The **RNTaboolaView** is a native component and is therefore not supported in Expo. If you are building your project using Expo, you will have to eject it and then begin the Taboola integration.

## Widget

To see an example of a widget integration, check the file **components > Widget.js**. When you sign up for the RN beta and begin the integration process, you will be provided with your own parameters to use as the props for the **RNTaboolaView** component. You can also see an example of the Widget rendered in a FlatList in **components > WidgetInFlatList.js**.

###Setting Height:
For widgets, it is important that you set the height of the **RNTaboolaView** dynamically using the **onDidLoad()** event handler. The easiest way to do this is to set the widget height in the component's state. See **components > Widget.js** for this example.

## Feed

To see an example of a feed integration, check the file **components > Feed.js**. When you sign up for the RN beta and begin the integration process, you will be provided with your own parameters to use as the props for the **RNTaboolaView** component. It is important to note here that the **scrollIntercept** and **scrollEnabled** props are both set to **true**. This is going to be the major difference between Widget and Feed integrations.

###Setting Height:
For feed, it is important that the height is set to 2x the height of the viewport. See **components > Feed.js** for this example.

## Test your own parameters

If you would like to test out your widget or feed params that were provided to you by Taboola before beginning your integration, you can:

- 1. clone down this repo and navigate to the project's root directory
- 2. run `npm install` from your terminal
- 3. To test your params: - for iOS, make sure you have Xcode installed, then run `npm run ios` from your terminal - for android, make sure you have an Android Virtual Device installed **and running**, then run `npm run android-linux` from your terminal
     -4. Once the app is running in your simulator, you can select either _Test your widget params_ or _Test your feed params_ and fill out the form with the parameters provided to you by Taboola.

This can be especially helpful if you need to test the height of your widget (as it is statically assigned to the RNTaboolaView component).
