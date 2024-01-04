import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';


const User = ({ match, location }) => {
  const history = useHistory()

  // console.log(location.state)

  // const user = [].find(user => user.id.toString() === match.params.id)
  // const userDetails = location.state ? Object.entries(location.state) :
  //   [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  const [chatDetails, setChatDetails] = useState([]);

  const getChatData = () => {

    try {
      const chat_details = Object.entries(location.state)
      console.log(chat_details.length)
      chat_details.forEach(chat => console.log(chat));

      setChatDetails(chat_details);
    }
    catch (error) {
      history.push(`/chats`)
    }

  }




  useEffect(() => {

    getChatData();

  }, [])



  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            <center>Chat ID: <b>{match.params.id}</b></center>
          </CCardHeader>
          <CCardBody>

            <div className="profile-container">
              <h1>Information</h1>
              <table className="table table-striped table-bordered  table-hover">
                <tbody>

                  {

                    chatDetails.map((row, idx) => {

                      return <tr key={idx}>
                        <td><i>{row[0].toUpperCase()}</i></td>
                        <td>
                          {
                            (row[0].toLowerCase() === "RECEIVER_IMAGE_URL".toLowerCase() || row[0].toLowerCase() === "SENDER_IMAGE_URL".toLowerCase())
                              ?
                              <a target="_blank" href={row[1]}><img height="100" width="100" src={row[1]} /></a>
                              :
                              <b>{row[1]}</b>
                          }


                        </td>
                      </tr>
                    })

                  }
                </tbody>
              </table>
            </div>






          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default User
