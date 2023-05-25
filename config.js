//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream
//
const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Rhys",
  openInNewTab: true,
  title: "Dashboard",

  // Clock
  twelveHourFormat: true,
  flashSeparator: false,
  
  // Theme
  theme: "onedark",
  imageBackground: false,
  imageUrl: "background.jpg", // place in ./src/assets/images/ and provide the file name. Alternatively, provide a URL to an image. If the page is served over https, you may have issues loading images from insecure origins.
  themes: [   // List of installed themes, add your own themes in ./src/assets/css/themes and include it in the array below.
    "arc",
    "bento",
    "catppuccin-frappe",
    "catppuccin-macchiato",
    "catppuccin-mocha",
    "conceptdark", // dark mode only
    "monokai",
    "nord",
    "onedark",
    "sakura",
    "solarized",
    "summer"
  ],

  // Search Bar
  searchBar: false,
  searchEngine: "google", // google, ddg
  barStyle: "bento", // bento, minimal, boxy, rounded
  barPlaceholder: "", // if blank, use search engine name. Set to ' ' for no placeholder.
  autoFocusBar: false,

  // Greetings
  greetingMorning: "Good morning,",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Sweet dreams,",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "1438cb19c727194424e1295815754ecd", // Write here your API Key
  weatherIcons: "Onedark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // Request location from the browser. If false, or location is denied, use the coordinates below.
  defaultLatitude: "37.61",
  defaultLongitude: "-77.44",

  // Autochange theme from OS preferece - The below options are all mutually exclusive. If you've got multiple set to true, the first one will be set and the rest ignored.
  changeThemeByOS: false,

  // Switch theme based on set hours. (24hr format, string must be in: hh:mm)
  changeThemeByHour: true,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // Switch dark theme automatically from sunrise to sunset. Pulls from the browsers location, or falls back to the defaults if not.
  // Requires an OpenWeatherMap API key.
  changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1", // entry ID, don't modify.
      name: "Github", // set the name of the card
      icon: "fab-github", // provide a FontAwesome icon name. Regular icons (fa-) don't require a prefix, while FA-Brands icons must be prefixed with "fab-"
      link: "https://github.com/" // provide a link to the page.
    },
    {
      id: "2",
      name: "Mail",
      icon: "envelope",
      link: "https://mail.google.com/mail/u/1/#inbox"
    },
    {
      id: "3",
      name: "Notion",
      icon: "cube",
      link: "https://www.notion.so"
    },
    {
      id: "4",
      name: "Reddit",
      icon: "fab-reddit",
      link: "https://libreddit.spike.codes/"
    },
    {
      id: "5",
      name: "freeCodeCamp",
      icon: "terminal",
      link: "https://www.freecodecamp.org/learn"
    },
    {
      id: "6",
      name: "Penpot",
      icon: "fab-figma",
      link: "https://penpot.app/"
    }
  ],

  secondButtonsContainer: [
    {
      id: "11",
      name: "Music",
      icon: "fab-spotify",
      link: "https://open.spotify.com"
    },
    {
      id: "12",
      name: "twitter",
      icon: "fab-twitter",
      link: "https://nitter.net/"
    },
    {
      id: "13",
      name: "bot",
      icon: "fab-discord",
      link: "https://discord.com/app"
    },
    {
      id: "14",
      name: "MechGroupBuys",
      icon: "keyboard",
      link: "https://www.mechgroupbuys.com"
    },
    {
      id: "15",
      name: "Youtube",
      icon: "fab-youtube",
      link: "https://youtube.com/"
    },
    {
      id: "16",
      name: "Dropout TV",
      icon: "face-laugh",
      link: "https://www.dropout.tv/"
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "house-user",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com"
        },
        {
          name: "Exercism",
          link: "https://exercism.org"
        },
        {
          name: "Itch.io",
          link: "https://itch.io/"
        },
        {
          name: "Dropout",
          link: "https://www.dropout.tv"
        },
      ]
    },
    {
      icon: "fab-github",
      id: "2",
      links: [
        {
          name: "Frameworks",
          link: "https://www.framework.dev/"
        },
        {
          name: "Neocities",
          link: "https://neocities.org/"
        },
        {
          name: "Rust Book",
          link: "https://rust-book.cs.brown.edu/"
        },
        {
          name: "Roundup",
          link: "https://www.obsidianroundup.org/"
        }
      ]
    }
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "Inspirational",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
          name: "Classic",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
          name: "Oldies",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
          name: "Rock",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ]
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "Linkedin",
          link: "https://www.linkedin.com"
        },
        {
          name: "Dribbble",
          link: "https://www.dribbble.com"
        },
        {
          name: "Airtable",
          link: "https://airtable.com"
        },
        {
          name: "Slack",
          link: "https://www.slack.com"
        }
      ]
    }
  ],

  // Set any of the below options to false to disable drawing the component on the page.
  // If themeButton is set to false, the theme can only be set in this file.
  // Disabling the weather component may cause issues with location-based light/dark switching.
  componentsEnabled: {
    searchBar: false,
    themeButton: true,
    clock: true,
    greeter: true,
    date: true,
    weather: false
  }

};

export const config = CONFIG;
