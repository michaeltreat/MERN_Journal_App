# MERN_Journal_App
A journaling app allowing users to login in, create a journal entry, and view others' journal entries.


Frontend uses:

- React
    - React-hook-form

- Input Validation:
    - Yup


Tasks:



Define views:

General:

- Landing
    - Sign-up/Login

- Home
    - Nav menu flyout
    - Recents

Journals:

The user should be able to see all of their journals, and view some of their internal content ( maybe on hover, or toggle). The should be able to click on a journal to go to that journal. They should have the option to create a new journal. (Stretch: They should be able to interact with journal controls from this view, such as hover to select delete, edit, share, etc.)

- Journals Home View
    - Controls
    - Journal Filters/Search
    - Journals Snapshot

- New Journal view
    - Appears when a user clicks create new journal
    - Uses Create journal form component
    - Similar experience to creating a new repo on github.
    - Navigates to the single Journal View once submitted.

- Single Journal View
    - Allows a user to view a specific journal
        - Displays a list of entry snapshots
        - Features the most recent entry
    - Journal Controls
        - Allows edit, sharing, delete, general settings
    - View Entries Snapshot component
        - Renders the list of entries as snapshots (brief glimpses of the memo, description, and content.)
    - Entries controls
        - Gives the user the ability to mass manipulate the entries in this journal. Filters, search, multiple selection for sharing deleting, ordering maybe.

Entries:
I think this is the primary feature here. This is where the user will spend most of their time, so I want to focus the most on this part of the experience.

- New entry view
    - Create Entry Form
        - This is the primary first-order experience. Meaning, this is the core primary user experience. The second-order experience would be something like viewing other people's entries.
        - This is where the user will be writing their entry. I don't think I want this to model the create journal form. It seems tedious to have the user create an entry, and then navigate to that entry. I want the user to feel like they can open up this part of the app and dive right into creating/writing.
            - In order to do so, I will think about what can be abstracted away, and how the experience will flow seemlessly. 
            - There are some interesting fun things I think might be interesting here too.
                - Active feedback?
                - Multiple users?
                - Canvas ability?
                - GraphQL ability?
                - Other integrations?
                - Twitch stream/feed?
                - Publishing, sharing, posting, linking?

        - I will experiment with a couple designs, but the basic needs are:

            - Text input
            - Submit button
            - Title
            - Description
            - Meta Commentary

- Single Entry View
    - This is the second-order experience. This is where the user views their or others' posts. 
    - Display view
        - Display's the entry in a view
            - Basics:
                - Just the entry, styled nicely, (like viewing a written journal entry on paper.)
            - Stretch:
                - Ability to comment
                - Ability to react
                - Ability to tag-out to public journals of similar tags
    - Entry Controls
        - Ability to modify the entry
        - Entry Settings

    - Entry form


User Settings:

- User Profile
    - Shows the user's profile
    - Ability to delete account
    - Ability to receive all their data in a download
    - Ability to become private/un-searchable
    - Update Display name
    - etc