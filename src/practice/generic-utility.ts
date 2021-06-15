interface CourseGoal {
  name: string;
  description: string;
  completeUntil: Date;
}

// partial
function createCourseGoal(
  title: string,
  desc: string,
  compl: Date
): CourseGoal {
  // making properties optional
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.name = title;
  courseGoal.description = desc;
  courseGoal.completeUntil = compl;

  // making sure we will return object of type CourseGoal in the end (with all the props set)
  return courseGoal as CourseGoal;
}

// readonly
const someNames: Readonly<string[]> = ["Alex", "Alexander", "Anna"];
// someNames.push("Gabriel"); // wont work, readonly type
