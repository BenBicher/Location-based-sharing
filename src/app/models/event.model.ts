export interface Event {
    name?: string;
    numOfParticipants: number;
    comment: string;
    picture: string;
    latitude: number;
    longitude: number;
    publisher: string;
    peopleThatJoined: [string];
    isShowOn: boolean;
    startTime: Date;
    endTime:Date;
  }