import React, { Component } from 'react';
import axios from 'axios';

import strings from './strings';

export default function putDataToDB(props) {
    //Example code
    // putDataToDB = (message) => {
    //     let currentIds = this.state.data.map((data) => data.id);
    //     let idToBeAdded = 0;
    //     while (currentIds.includes(idToBeAdded)) {
    //       ++idToBeAdded;
    //     }
    
    //     axios.post(strings.PUT_DATA, {
    //       id: idToBeAdded,
    //       message: message,
    //     });
    //   };
}

export default function deleteFromDB(props) {
    //Example code
    // deleteFromDB = (idToDelete) => {
    //     parseInt(idToDelete);
    //     let objIdToDelete = null;
    //     this.state.data.forEach((dat) => {
    //       if (dat.id == idToDelete) {
    //         objIdToDelete = dat._id;
    //       }
    //     });
    
    //     axios.delete(strings.DELETE_DATA, {
    //       data: {
    //         id: objIdToDelete,
    //       },
    //     });
    //   };
}

export default function updateDB(props) {
    //Example code
    // updateDB = (idToUpdate, updateToApply) => {
    //     let objIdToUpdate = null;
    //     parseInt(idToUpdate);
    //     this.state.data.forEach((dat) => {
    //       if (dat.id == idToUpdate) {
    //         objIdToUpdate = dat._id;
    //       }
    //     });
    
    //     axios.post(strings.UPDATE_DATA, {
    //       id: objIdToUpdate,
    //       update: { message: updateToApply },
    //     });
    //   };
}