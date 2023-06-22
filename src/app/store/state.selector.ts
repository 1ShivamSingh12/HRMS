import { createFeatureSelector } from "@ngrx/store"

export const DIRECTORY_DATA_SEARCH = 'get_directory_data_search'
export const DIRECTORY_DATA_FILTER = 'get_directory_data_filter'
export const NUMBER_OF_COUPON = 'get_number_of_coupon'
export const REFER_A_FRIEND = 'get_refer_a_friend'

export const PROFILE_PICTURE_PREVIEW = 'get_profile_picture'





export const getDirectoryDataSelectorSearch = createFeatureSelector(DIRECTORY_DATA_SEARCH)
export const getDirectoryDataSelectorFilter = createFeatureSelector(DIRECTORY_DATA_FILTER)
export const getNumberOfCouponSelector = createFeatureSelector(NUMBER_OF_COUPON)
export const getReferFriendAelector = createFeatureSelector(REFER_A_FRIEND)
export const getProfilePictureSelector = createFeatureSelector(PROFILE_PICTURE_PREVIEW)





