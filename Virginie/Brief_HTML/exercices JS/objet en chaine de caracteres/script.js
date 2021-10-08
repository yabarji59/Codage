class Member{
  constructor(id, name, grade){
    this.id = id;
    this.name = name;
    this.grade = grade;
  }
}
   
  let harry = new Member(15, "Harry Potter", "élève");
  let ron = new Member(16, "Ron Weasley", "élève");
  let hermione = new Member(17, "Hermione Granger", "élève");

  let trio = [harry, ron, hermione];

  console.log(trio);