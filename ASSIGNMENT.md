# Assignment - User Stories

## All Campuses and Students

### Sequelize
- [ ] Write a `campus` model with the following information:
    - [ ] *name:* not empty or null
    - [ ] *imageUrl:* with a default value
    - [ ] *address:* not empty or null
    - [ ] *description:* extremely large text
- [ ] Write a `student` model with the following information:
    - [ ] *firstName:* not empty or null
    - [ ] *lastName:* not empty or null
    - [ ] *email:* not empty or null; must be a valid email
    - [ ] *imageUrl:* with a default value
    - [ ] *gpa:* decimal between 0.0 and 4.0
- [ ] Students may be associated with at most one campus. Likewise, campuses may be associated with many students.

### Express and Sequelize
- [ ] Write a route to serve up all students
- [ ] Write a route to serve up all campuses

---

## Single Student and Single Campus

### Express and Sequelize
- [ ] Write a route to serve up a single campus (based on its id), including the students enrolled at that campus
- [ ] Write a route to serve up a single student (based on their id), including the campus the student is enrolled at

---

## Adding a Campus and Adding a Student

### Express and Sequelize
- [ ] Write a route to add a new campus
- [ ] Write a route to add a new student

---

## Removing a Campus and Removing a Student

### Express and Sequelize
- [ ] Write a route to remove a campus (based on its id)
- [ ] Write a route to remove a student (based on their id)