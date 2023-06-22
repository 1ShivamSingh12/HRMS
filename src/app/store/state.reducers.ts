import { createReducer, on } from '@ngrx/store';
import { counter, directory, profilePicture, referFriend } from './state.store';
import {
  getDirectoryFilter,
  getNumberOfCoupon,
  getProfilePicture,
  getReferFriend,
  getSearchDirectoryFilter,
} from './state.actions';

export const directorySearchReducer = createReducer(
  directory,
  on(getSearchDirectoryFilter, (state, data) => {
    console.log(data, 'dwceqwewe');
    if (
      data.searchString &&
      (data.filterValue == null || data.filterValue == 'All')
    ) {
      let filterData = directory.filter((c: any) =>
        c.name.toLowerCase().includes(data.searchString.toLowerCase())
      );
      return filterData;
    } else if (data.searchString && data.filterValue !== 'All') {
      let filterdata = directory.filter(
        (c: any) =>
          c.name.toLowerCase().includes(data.searchString.toLowerCase()) &&
          c.designation.toLowerCase().includes(data.filterValue.toLowerCase())
      );
      console.log(filterdata, 'erku');
      return filterdata;
    }
  })
);

export const directoryFilterReducer = createReducer(
  directory,
  on(getDirectoryFilter, (state, data) => {
    console.log(data.filterValue, state, 'dwceqwewe');
    if (data.filterValue !== 'All' && data.searchString == null) {
      console.log('ff');

      let filterData = directory.filter((c: any) =>
        c.designation.toLowerCase().includes(data.filterValue.toLowerCase())
      );
      console.log(filterData);
      return filterData;
    } else if (data.filterValue != 'All' && data.searchString) {
      console.log('kk');

      let filterdata = directory.filter(
        (c: any) =>
          c.name.toLowerCase().includes(data.searchString.toLowerCase()) &&
          c.designation.toLowerCase().includes(data.filterValue.toLowerCase())
      );
      console.log(filterdata, 'erku');
      return filterdata;
    } else if (data.filterValue == 'All' && data.searchString) {
      let filterData = directory.filter((c: any) =>
        c.name.toLowerCase().includes(data.searchString.toLowerCase())
      );
      console.log(filterData);
      return filterData;
    }
    return directory;
  })
);

export const NumberOfCouponReducer = createReducer(
  counter,on(getNumberOfCoupon, (state, data) => {
    console.log(data.e, 'sddjcqewu');
    if (data.e == true) {
      let couponCount = state.count + 1;
      return {count :couponCount , value : (couponCount*25)}
    } else {
      let couponCount = state.count - 1;
      return {count :couponCount , value : (couponCount*25)};
    }
  })
);


export const ReferAFriendReducer = createReducer(
  referFriend,on(getReferFriend, (state, data) => {
    // console.log(data.values.candidate_name,'wekjfbqwkd');
    let newReferFriendData = [...state];
    let referFriendData = {
      serial_number:newReferFriendData.length+1,
        candidate_name:data.values.candidate_name,
        experience:data.values.experience,
        department:'',
        position:data.values.position,
        date_of_referral:new Date(),
        candidate_status:"Pending",
        resume:data.values.file
    }
    newReferFriendData.push(referFriendData);

    return newReferFriendData
  })
);




export const profilePictureReducer = createReducer(
  profilePicture,on(getProfilePicture, (state, data) => {

    let newImg = data
    return newImg;

  })
);
