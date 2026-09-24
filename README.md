# Mobile Programming

A collection of React Native (Expo) apps built for a mobile programming course, covering platform APIs, animations, gestures, navigation, location/maps, persistent storage, and full small apps built from scratch.

## Structure

<dl>
<dt><strong>PieChart</strong></dt>
<dd>A custom native UI component - a pie chart built as a native module bridge (requireNativeComponent) with a button to randomize the slice values.</dd>

<dt><strong>android_toast</strong></dt>
<dd>A minimal demo of a platform-specific API, showing a native Android toast message on button press.</dd>

<dt><strong>animation_app</strong></dt>
<dd>A Spider-Man themed demo of React Native's Animated API - fade in/out, a wiggle/rotate loop, and a zoom animation, each triggered by its own button.</dd>

<dt><strong>gestures</strong></dt>
<dd>A drag-and-drop puzzle where the user rearranges four image tiles into the correct 2x2 grid using pan gestures.</dd>

<dt><strong>home_app</strong></dt>
<dd>A smart-home style app using React Navigation's native stack navigator, with screens for security, multiple camera feeds, and a media playlist.</dd>

<dt><strong>location_app</strong></dt>
<dd>A live GPS tracking app that renders the user's position on a map in real time and monitors network connectivity status.</dd>

<dt><strong>contact-list</strong></dt>
<dd>A tabbed contacts app (Contacts, Favorites, Profile, Options) using React Navigation's stack and bottom-tab navigators with a small custom state store shared across screens.</dd>

<dt><strong>grocery-list</strong></dt>
<dd>An editable grocery list app with persistent storage via AsyncStorage, so items survive an app restart.</dd>

<dt><strong>image-feed</strong></dt>
<dd>An Instagram-style photo feed with a comments modal, where comments are persisted locally with AsyncStorage.</dd>

<dt><strong>messaging</strong></dt>
<dd>A chat app supporting multiple message types (text, image, and location), a custom keyboard-aware input toolbar, and a fullscreen image viewer.</dd>

<dt><strong>puzzle</strong></dt>
<dd>A sliding-tile image puzzle game with a selectable grid size and a randomly fetched image for each round.</dd>

<dt><strong>time-tracking</strong></dt>
<dd>A timer app for tracking time across multiple named projects, with editable, start/stop-able timers.</dd>

<dt><strong>weather</strong></dt>
<dd>A weather lookup app that fetches current conditions for a searched city and updates the background image to match the weather.</dd>

<dt><strong>checkpoints</strong></dt>
<dd>Earlier in-progress snapshots of the puzzle app (puzzle-1, puzzle-2), kept as milestone checkpoints from earlier stages of development.</dd>

<dt><strong>video-code</strong></dt>
<dd>Supplementary reference code (a small API server and an example image-feed implementation) used alongside the course material.</dd>
</dl>

Most project folders also contain numbered subfolders (1, 2, 3...) - these are incremental snapshots of the app as it was built up step by step through the assignment, with the files at the root of each folder representing the final, complete version.

## Tech Stack
- React Native
- Expo
- React Navigation
- AsyncStorage
- react-native-maps
- Native modules
