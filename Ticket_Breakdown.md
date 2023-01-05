# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Add a new field to the Agents table in the database to store custom id provided by the Facility.
   Acceptance criteria: The new field should be able to store a string of arbitrary length.
   Time/effort estimate: 1 hour
   Implementation details: Add a new column to the Agents table in the database and ensure that this column can store a string of arbitrary length.

2. Update getShiftsByFacility function to include the custom id of the Agent in the metadata returned for each Shift.
   Acceptance criteria: The metadata for each Shift should include the custom id of the Agent if it has been provided. If the custom id has not been provided, the internal database id should be used.
   Time/effort estimate: 1 hour
   Implementation details: Modify the getShiftsByFacility function to include the custom id of the Agent in the metadata if it has been provided. If the custom id has not been provided, the internal database id should be used.

3. Update generateReport function to use the custom id of the Agent provided in the metadata of each Shift when generating the report.
   Acceptance criteria: The report should use the custom id of the Agent provided in the metadata of each Shift if it has been provided. If the custom id has not been provided, the internal database id should be used.
   Time/effort estimate: 1 hour
   Implementation details: Modify the generateReport function to use the custom id of the Agent provided in the metadata of each Shift if it has been provided. If the custom id has not been provided, the internal database id should be used.

4. Add the ability for Facilities to provide custom ids for Agents on the platform.
   Acceptance criteria: The Facility should be able to provide a custom id for each Agent they work with on the platform.
   Time/effort estimate: 2 hours
   Implementation details: Add a new page to the platform where Facilities can provide custom ids for each Agent they work with. This page should allow the Facility to view a list of all the Agents they have worked with and provide a custom id for each Agent.

5. Update the documentation for the platform to reflect the new feature.
   Acceptance criteria: The documentation should include information on how Facilities can provide custom ids for Agents and how these custom ids will be used in reports.
   Time/effort estimate: 1 hour
   Implementation details: Update the documentation to include information on how Facilities can provide custom ids for Agents and how these custom ids will be used in reports.
