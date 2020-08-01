export class ProjectSubmitDTO {
  Name: string;
  Description: string;

  constructor(InputName: string, Desc: string) {
    this.Name = InputName;
    this.Description = Desc;
  }
}
