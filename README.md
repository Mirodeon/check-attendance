# Attendance check

## Introduction

Currently following training with BeCode as a junior developer, an attendance control system is used to verify absences.

Inattention and errors on the part of trainees being frequent in the use of this one, I made a Google extension out of curiosity to validate its presence more easily.

## Purpose

The goal is to avoid these errors and inattention and thus reduce the corrections that our dear and beloved trainers must regularly make following them. Any fraudulent use such as validating one's presence without actually being present is to be avoided and is not the purpose of this extension.

## How to install

To install the extension, you can either clone the repository or put the contents of it in a folder then go to [chrome://extensions/](chrome://extensions/) and activate developer mode there.

It is then necessary to load the unpackaged extension and select the folder containing the extension.

![menuExtension](./src/img/Capture%20d%E2%80%99%C3%A9cran%202022-06-06%20191043.png)

## How to use 

When the Becode dashboard is opened, the extension launches with the starting parameters being "location: BeCode" and "status: on".

In order to be able to check the presence, the extension nevertheless requires that the tab be open and visible.

The extension selects the location once at 8:46 a.m. and then validates the presence during the day when the selection button is available.

Parameters such as the selected location and if the extension is running are verifiable in the popup of the extension that you can find in your toolbar.

The opening popup will retrieve the extension's current settings and display them. The parameters can be modified via this same popup, so the location and activity of the extension can be modified there.

![popup](./src/img/Capture%20d%E2%80%99%C3%A9cran%202022-06-06%20191552.png)

## Technologies

HTML, SASS, JS, JSON