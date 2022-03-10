I had started to learn Python and gotten wrapped around the axel with building the app until I was able to find a YouTube video yesterday.
To give credit to him: https://youtu.be/pwA_Ehp2SMY
This allowed me to watch the videos, learn from your documentation and worry less about the coding of an app.
To test this out you must:
1) Download the Visual Studio Code from: https://code.visualstudio.com/download
2) Download React from https://reactjs.org
3) Install both applications
4) Follow instructions on the above YouTube Video at time stamp 1:19.
5) Download and open the folder from: https://github.com/theculby5/launchdarkly.git
6) Open up App.js in the src folder.
7) Make sure that yo now can see the example of the app in your browser: http://localhost:3000
8) Modify the "this.ldclient = LDClient.initialize('6226a1e75f750f152448277d', user)" with your client side key.
9) Turn on Targeting for the feature.
10) Set the server to false on the Default Rule
11) Match the user key for the user that you want to target.
12) You will see that when your refress the browser that the sorting will switch to either "Time" or "Natural" sorting depending on the enabling of the feature flag or the changing of the user key.
13) This will also report data to the console as you change the user key in the app.
14) If you change the default rule for the feature flag in the targeting tab, you will see on the browser how quickly the app is updated.
