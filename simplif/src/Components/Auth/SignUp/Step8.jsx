import React, { useState } from 'react';
import AuthBreadCrumb from '../../common/AuthBreadCrumb.jsx'
import { Box, Typography, Button, Grid, Avatar } from '@mui/material'
import ImageUploader from 'react-image-upload'
import p1 from '../../../Assets/png/detail/p1.png'
import 'react-image-upload/dist/index.css'
import "../../styles.css"


const Step8 = ({ goToNextStep }) => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  function getImageFileObject(imageFile) {
    console.log({ imageFile })
  }

  function runAfterImageDelete(file) {
    console.log({ file })
  }
  const styles = theme => ({
    closeUploader: {
      background: '#eee'
    }
  })
  return (
    <Box sx={{ width: "70%", height: "auto", maxWidth: '1400px', border: '2px solid #E5E5E5', borderRadius: '10px', p: 4, pt: 4 }}>

      <AuthBreadCrumb title={"My Profile"} step={8} />
      <Box sx={{
        width: 1, height: 'auto', p: 4,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        mt: 4
      }}>
        <Box sx={{ width: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1, mt: "-50px" }}>
          <Typography variant="h4" color="initial" sx={{ fontWeight: 'bold' }}>My Profile</Typography>
          <Typography color="#4D4D4D" sx={{ fontSize: '12px' }}>These images will be shown on the marketplace, visible for brands to see.</Typography>
          <div className="image-profile" style={{ display: "flex", justifyContent: "start", width: "100%", paddingBottom: "10px", alignItems: "center", gap: "10px" }}>
            <Avatar alt="Image" src="" sx={{ width: "100px", height: "100px" }} />
            <div style={{ border: "1px solid #000", height: "fit-content", padding: "5px" }}>
              <input type="file" />
            </div>
          </div>
          <Box sx={{ width: 1, height: "360px", display: "flex", gap: "10px" }}>
            <div className="wrapper-upload" style={{ height: "100%", width: "50%" }}>
              <div className="up-one" style={{ height: "100%", borderRadius: "12px", background: "rgb(85 85 85 / 34%)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                <div className="heading" style={{ position: "absolute", top: "5%", left: "3%", background: "#888", fontSize: "12px", padding: "5px", borderRadius: "5px" }}>
                  <h4>Marketplace Image</h4>
                </div>

                <ImageUploader
                  sx={{ background: "transparent" }}
                  onFileAdded={(img) => getImageFileObject(img)}
                  onFileRemoved={(img) => runAfterImageDelete(img)}
                  className="custom-image-uploader"
                />
              </div>
            </div>
            <div className="wrapper-upload" style={{ height: "100%", width: "50%", display: "flex", gap: "10px", flexDirection: "column" }}>
              <div className="up-one" style={{ height: "50%", width: "100%", borderRadius: "12px", background: "rgb(85 85 85 / 34%)", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", position: "relative" }}>
                <div className="heading" style={{ position: "absolute", top: "5%", left: "3%", background: "#888", fontSize: "12px", padding: "5px", borderRadius: "5px" }}>
                  <h4>Cover Image</h4>
                </div>
                <ImageUploader
                  sx={{ background: "transparent" }}
                  onFileAdded={(img) => getImageFileObject(img)}
                  onFileRemoved={(img) => runAfterImageDelete(img)}
                  className="custom-image-uploader"
                />
              </div>
              <div className="inner-up-wrapper" style={{ display: "flex", width: "100%", height: "50%", gap: "10px" }}>
                <div className="up-one" style={{ height: "100%", width: "50%", borderRadius: "12px", background: "rgb(85 85 85 / 34%)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                  <div className="heading" style={{ position: "absolute", top: "5%", left: "3%", background: "#888", fontSize: "12px", padding: "5px", borderRadius: "5px" }}>
                    <h4>Cover Image</h4>
                  </div>
                  <ImageUploader
                    sx={{ background: "transparent" }}
                    onFileAdded={(img) => getImageFileObject(img)}
                    onFileRemoved={(img) => runAfterImageDelete(img)}
                    className="custom-image-uploader"
                  />
                </div>
                <div className="up-one" style={{ height: "100%", width: "50%", borderRadius: "12px", background: "rgb(85 85 85 / 34%)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                  <div className="heading" style={{ position: "absolute", top: "5%", left: "3%", background: "#888", fontSize: "12px", padding: "5px", borderRadius: "5px" }}>
                    <h4>Cover Image</h4>
                  </div>
                  <ImageUploader
                    sx={{ background: "transparent" }}
                    onFileAdded={(img) => getImageFileObject(img)}
                    onFileRemoved={(img) => runAfterImageDelete(img)}
                    className="custom-image-uploader"
                  />
                </div>
              </div>
            </div>
            {/* <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box sx={{ width: "100%", height: "150px", position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                        <img src={p1} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Box sx={{ width: "100%", height: "150px", position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                            <img src={p1} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ width: "100%", height: "150px", position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                            <img src={p1} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid> */}
          </Box>
          <Button variant='contained' sx={{ width: '45%', py: 2.5, fontSize: '20px', mt: 4 }} onClick={goToNextStep}>Next</Button>
          <Typography variant="body1" color="#4D4D4D" sx={{ cursor: 'pointer' }}>Sign out</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Step8