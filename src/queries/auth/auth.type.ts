export type LoginResponse = {
  token: string;
};

export type ProfileResponse = {
  displayPicture: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  moneyToGet: number;
  moneyToGive: number;
  phoneNo: string;
};

export type UpdateProfileType = Partial<{
  firstName: string;
  lastName: string;
  phoneNo: string;
}>;