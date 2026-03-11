CREATE TABLE students (
    id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    student_name TEXT NOT NULL, 
    class TEXT
);

CREATE TABLE questions (
    id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id INT REFERENCES students(id), --foreign key--
    time_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    questions TEXT
); 

CREATE TABLE comments (
    id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id INT REFERENCES students(id), --foreign key--
    time_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    question_id INT REFERENcES students(id),
    comments TEXT
); 