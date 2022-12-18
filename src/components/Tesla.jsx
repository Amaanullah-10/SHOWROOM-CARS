import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import "tailwindcss/tailwind.css"
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LAMBOV1 from "../assets/LAMBOS1.mp4"
import LAMBOV2 from "../assets/LAMBOS2.mp4"
import LAMBOV3 from "../assets/LAMBOS3.mp4"
import LAMBOV4 from "../assets/LAMBOS4.mp4"

export default function BasicCard() {
  return (
    <div>
      <div>
        <div >
        <p className="bg-sky-500 aspect-square">TESLA</p>
        </div>
      <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
                2019 . 
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="C:\Users\CSC\Desktop\myapp\showroom\src\images\LAMBOS\2020-lamborghini-aventador-svj-roadster-drive-107-1576871367.jpg"
          >
            <source
              src={LAMBOV1}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
          LAMBORGHINI AVENT
          </Typography>
        </CardContent>
      </Card>
    </Box>

    </div>
    <div>
      <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, my: 0.5,py:0 }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow:1 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1604164448130-d1df213c64eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlc2xhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
           2020.
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="C:\Users\CSC\Desktop\myapp\showroom\src\images\LAMBOS\2020-lamborghini-aventador-svj-roadster-drive-107-1576871367.jpg"
          >
            <source
              src={LAMBOV2}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            LAMBORGHINI  URUS
          </Typography>
        </CardContent>
      </Card>
    </Box>

    </div>
    <div>
      <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, my: 0.5,py:0 }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow:1 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFtYm9yZ2hpbml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
             2019 .
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="C:\Users\CSC\Desktop\myapp\showroom\src\images\LAMBOS\2020-lamborghini-aventador-svj-roadster-drive-107-1576871367.jpg"
          >
            <source
              src={LAMBOV3}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            LAMBORGHINI AVENT
          </Typography>
        </CardContent>
      </Card>
    </Box>

    </div>
    <div>
      <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, my: 0.5,py:0 }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow:1 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1516515429572-bf32372f2409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5Njg2MDMyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            2019 .
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="C:\Users\CSC\Desktop\myapp\showroom\src\images\LAMBOS\2020-lamborghini-aventador-svj-roadster-drive-107-1576871367.jpg"
          >
            <source
              src={LAMBOV4}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            LAMBORGHINI HURA
          </Typography>
        </CardContent>
      </Card>
    </Box>

    </div>

    </div>
    
    
    
    
  );
}
