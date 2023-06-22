import { createAction, props } from "@ngrx/store";

export const getSearchDirectoryFilter = createAction(
  '{DIRECTORY} search data in directory',
  props<any>()
)

export const getDirectoryFilter = createAction(
  '{DIRECTORY} Filter directory',
  props<any>()
)

export const getNumberOfCoupon = createAction(
  '{Coupon} Number of Coupon',
  props<any>()
)

export const getReferFriend = createAction(
  '{Referal} Refer a friend',
  props<any>()
)

export const getProfilePicture = createAction(
  '{Profile} Profile Picture',
  props<any>()
)
