import React from "react";

export function CreateCourse(course) {
  return { type: "CREATE_COURSE", course: course };
}
