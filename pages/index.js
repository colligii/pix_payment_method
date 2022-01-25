import 'bootstrap/dist/css/bootstrap.min.css'
import { Box, Typography } from '@mui/material'
import pixLogo from '../img/logo-pix-icone-1024.png'

function Index() {
    return (
        <>
            <Box>
                <Box>
                    <Typography
                        variant="h4"
                        className="pt-3 d-flex justify-content-center"
                    >
                        Select your payment method.
                    </Typography>
                </Box>
                <Box
                    className="p-2"
                >
                    <Box
                        className="px-2"        
                    >
                        <Typography
                            variant="h8"
                        >
                            Payment Methods:
                        </Typography>
                        <Box
                            className="px-3 pt-1"
                        >
                            <img
                                src={pixLogo.src}
                                height="100"
                                alt="Pix Logo"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Index;