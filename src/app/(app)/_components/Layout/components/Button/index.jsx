"use client";

import * as React from "react";
import { 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  IconButton, 
  styled, 
  Zoom 
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Styled Component avec une meilleure gestion du verre
const GlassDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.05)", 
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)", // Support Safari
    border: "1px solid rgba(255, 255, 255, 0.1)",
    maxWidth: "500px",
    width: "100%",
    color: "#fff",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
  },
}));

export default function ContactDialog({ title, firstletter, color = "primary" }) {
  const [open, setOpen] = React.useState(false);

  const toggleDialog = () => setOpen((prev) => !prev);

  return (
    <>
      {/* Bouton de déclenchement avec Tailwind + SX */}
      <Button
        onClick={toggleDialog}
        className="my-animation myFont text-white duration-300"
        sx={{
          minWidth: "auto",
          p: 1,
          textTransform: "none",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" }
        }}
      >
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold uppercase" style={{ color }}>
            {firstletter}
          </span>
          <span className="myFont lowercase text-sm opacity-80">{title}</span>
        </div>
      </Button>

      <GlassDialog
        open={open}
        onClose={toggleDialog}
        TransitionComponent={Zoom} // Animation plus moderne
        aria-labelledby="contact-dialog-title"
      >
        {/* Header avec bouton fermer optimisé */}
        <DialogTitle id="contact-dialog-title" className="text-center md:text-left py-6">
          <span className="myFont text-2xl font-semibold">Me Contacter</span>
          <IconButton
            aria-label="close"
            onClick={toggleDialog}
            sx={{
              position: "absolute",
              right: 12,
              top: 12,
              color: "rgba(255,255,255,0.7)",
              "&:hover": { color: "#fff" }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* Content - Utilisation de balises sémantiques */}
        <DialogContent dividers sx={{ borderColor: "rgba(255,255,255,0.1)", p: 4 }}>
          <div className="flex flex-col space-y-6 myFont">
            <div className="group">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Téléphone</p>
              <a 
                href="tel:+33699197324" 
                className="text-white text-xl hover:text-blue-400 transition-colors"
              >
                06 99 19 73 24
              </a>
            </div>

            <div className="group">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Email</p>
              <a
                href="mailto:romainflori@orange.fr"
                className="text-white text-lg break-all hover:underline decoration-blue-400 underline-offset-4 transition-all"
              >
                romainflori@orange.fr
              </a>
            </div>

            <div className="group">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Autres liens</p>
              <a
                href="https://github.com/RomainFlori"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white text-lg hover:text-blue-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                github.com/RomainFlori
              </a>
            </div>
          </div>
        </DialogContent>
      </GlassDialog>
    </>
  );
}