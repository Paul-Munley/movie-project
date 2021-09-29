# Paul Munley Movie Search Project Process 🍿

I decided to use React to create this app as it seemed most fitting considering the UI and state requirements of this project. It seemed that a SPA would work best for this. 

To be honest, I have never taken a CSV with a bunch of data and tried to put it on a front end. Becuase of this, I would say this was my biggest road block. My main assumption was to get all of the 86k rows of data to work, it would have to be added to a database (I could be off on this though). I am familar with Firebase so I decided to go that route. I wrestled around with figuring out how to get this to work but ended up doing so after a solid amount of time.

#### Main takeaways in regards to transferring the CSV. ####
1. There are a large variety of ways to convert CSVs into JSON files. I decided to go the route of downloading the csvtojson pagkage globally on my computer and doing it from the command line.
2. At least in terms of Firebase but I think this may be the case with others; you need to make sure that all of your fields are filled with something in order for the data to be added into the Firebase DB. It won't let you have an empty string in any of your JSON values.
3. How to work a little bit more with CSVs.

#### Thinks that I could have added or improved upon with more time
1. Fixing up the various keys/fields in the database as opposed to the field names that they had. That isn't too explanatory for someone who was happening to utalize the database.
2. Creating an API to interact with the Database as opposed to just directly interacting with the database. I do know that it is not good to directly interact with a database as this is not safe in terms of data being hijacked. Because of this, this would be a good thing to add.
3. The functionality of the adding and removing favorites. I was planning on doing that with local storage but know it also could have been done with cookies or user accounts.
4. Input validation or more advanced handling of search queries. There could have been many things that could have been implemented in this regard. Having a dynamic search bar showing movies as the user is typing. If not that, showing results even if the user only types the first few letters of a movie title and presses search. Handling the error of a movie not being found. Etc.
5. I could have also created a more modular design in terms of my code. I feel that it could have been a possibility to have the saving of the favorites be completed on a different component, Redux (if necessary), or somewhere else in the applicaiton. I guess this would also be dependent on the size of the application as well.
6. Making the UI better. There could be some cool things to be added for the UI. Like some movie-like animations, images, a formal grid layout, a dynamic dropdown with a colleciton of the favorites, etc.

All in all I feel that I did good considering the CSV to Front End is something that I haven't done before. Hopefully that is something that is considered. Other than that it was overall a blast and great learning experience. Thanks!
