# L'Horloge

"Horloge! dieu sinistre, effrayant, impassible,
Dont le doigt nous menace et nous dit: «Souviens-toi!..."*
*Everyone should experience the dramatics and existential dread of Charles Baudelaire.*
(<https://fleursdumal.org/poem/218>)

## Description

A Day scheduler that tracks the current time and is editable. Every hour of the day is a text field that allows the user to save hourly events locally. As a coding project in a Full Stack Coding Bootcamp, it necessitates the use of 'dynamically updated HTML and CSS powered by jQuery,'(see credits) with a necessary use of the [Day.js](https://day.js.org/en/) library.

The provided User Story and Acceptance Criteria are as follows:

### User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Usage

Once the user navigates to this app/webpage, they should be able to record an event in each hour's text field and save these entries to local storage by pressing the save button. Upon refreshing the page, or closing and re-opening the page, the text remains if the save button has been pressed.

The schedule alters every hour and reacts in real-time. All past hours are [greyed] out, the current hour is in [orange], and future hours are in [green].

Here are two images of an entry that has been saved and remains after refresh. The images also highlight the color change associated to past, present, and future hours, and displays the current time in the header:

![Alt text](assets/images/Screenshot%202023-06-05%20at%204.56.34%20PM.png)
![Alt text](assets/images/Screenshot%202023-06-05%20at%204.58.32%20PM.png)

## Roadmap

The project now satisfies the user requirements and acceptance criteria. All that remains is additional styling if needed or wanted.

## Credits

The starter code provided includes the index.html, style.css, and instructions in script.js, and the providedREADME.md files. These were provided by edX (<www.edx.org>) who created the materials and instruction for the bootcamp mentioned in the description. This bootcamp is hosted by the University of New Brunswick (<https://bootcamps.unb.ca>).

## License

This project uses the MIT License. For more details, see the LICENSE file in the repository for this project.
