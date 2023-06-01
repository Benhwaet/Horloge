# L'Horloge

"Horloge! dieu sinistre, effrayant, impassible,
Dont le doigt nous menace et nous dit: «Souviens-toi!..."*
de tes tâches, tabarouette!
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

Once the user navigates to this app, they should be able to record and event in each hour's text field and save these entries in local storage. The schedule alters every hour and reacts in real-time. All past hours are [greyed] out, the current hour is in [red], and future hours are in [green].

Here is an image of an entry in progress that also highlights the color change associated to past, present, and future hours:

|insert image here|

## Roadmap

The project is now in the earliest stages of setting up all necessary assets and desribing the steps the project requires. Only the starter code and README have been added.

## Credits

The starter code provided includes the index.html, style.css, and instructions in script.js, and the providedREADME.md files. These were provided by edX (<www.edx.org>) who created the materials and instruction for the bootcamp mentioned in the description. This bootcamp is hosted by the University of New Brunswick (<https://bootcamps.unb.ca>).

## License

This project uses the MIT License. For more details, see the LICENSE file in the repository for this project.
