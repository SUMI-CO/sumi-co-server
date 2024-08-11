export interface ITextItem {
  text: string;
}

export interface IImageItem {
  imageUrl: string;
}

export interface IVideoItem {
  videoUrl: string;
}

export type SubLessonItemType = ITextItem | IImageItem | IVideoItem;

export interface ISubLesson {
  id: number;
  title: string;
  items: SubLessonItemType[];
}

export interface ILesson {
  id: number;
  title: string;
  subLessons: ISubLesson[];
}

export interface ICourse {
  id: number;
  name: string;
  imageUrl: string;
  lessons: ILesson[];
}
