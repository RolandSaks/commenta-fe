import { Reaction } from '../app/reaction';

export class Comment {

  constructor(
    public author: string = null,
    public content: string = null,
    public creationTime: Date = null,
    public displayReaction: Reaction = null,
    public totalReactionCount: number = 0,
    public articleLink: string = null,
    public articleTitle: string = null
  ) {
  }

}
