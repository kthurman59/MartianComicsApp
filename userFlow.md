flowchart TD
    A[Start: Launch App] --> B[Splash Screen]
    B --> C[Onboarding / Tutorial (Optional)]
    C --> D[Login / Register / Continue as Guest]
    D --> E[Home Screen]

Main navigation from Home
    E --> F[Browse Comics List]
    E --> G[Search Comics]
    E --> N[User Profile & Settings]

From Browse Comics or Search Results
    F --> H[Comic Details Page]
    G --> H

From Comic Details Page
    H --> I[Start Reading]

Reading View interactions
    I --> J[Reading View]
    J --> K[Bookmark Page]
    J --> L[Navigation: Next/Previous Panels or Chapters]
    J --> M[Adjust Reading Settings (e.g., brightness, font)]
    J --> Q[Exit to Home Screen]

User Profile interactions
    N --> R[View / Manage Bookmarks]
    N --> S[Update Account Settings]
    N --> E

Explanation of the Flowchart
Launch & Onboarding:

Start: The app launch triggers a splash screen (A → B).
Onboarding/Tutorial: If new users need guidance, an optional tutorial is displayed (B → C).
Authentication: Users can log in, register, or continue as a guest (C → D).
Home Screen & Navigation:

The home screen (E) acts as the central hub, providing access to:
Comic Browsing: A list of comics that users can browse (E → F).
Search Functionality: Allowing users to quickly find comics (E → G).
User Profile & Settings: For managing bookmarks, account settings, etc. (E → N).
Comic Discovery & Reading:

From either browsing or searching, users reach the comic details page (F/G → H).
Start Reading: Initiates the reading experience (H → I), leading to the dedicated reading view (I → J).
In-Reading Interactions:

Within the reading view (J), users can:
Bookmark: Save their progress or favorite pages (J → K).
Navigation: Move between pages or chapters (J → L).
Adjust Settings: Modify reading settings like brightness or text size (J → M).
Exit: Return to the home screen (J → Q).
User Profile & Management:

From the user profile section (N), users can manage:
Bookmarks: Review and edit saved comics or pages (N → R).
Account Settings: Update personal information or app preferences (N → S).
They can also navigate back to the Home Screen (N → E).

