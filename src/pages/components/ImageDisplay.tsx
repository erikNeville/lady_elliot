import * as React from 'react';
import {
  Backdrop,
  Box,
  Fade,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import { IImage, ImageContext } from '../../state/imgState';
import { styled } from '@mui/system';

const Styled = {
  Root: styled(Box)({
    margin: 'auto',
    maxWidth: '900px',
    height: '450px',
    textAlign: 'center',
    '& .MuiImageListItem-img': {
      backfaceVisibility: 'hidden',
      display: 'block',
      position: 'relative',
      maxHeight: '504px',
      transition: 'all ease 0.2s',
    },
  }),
  ModalRoot: styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  }),
};

interface Props {
  category: string;
}

interface ModalProps {
  imgSrc: string;
  imgTitle: string;
  open: boolean;
  handleClose: () => void;
}

const imageTitle = (title: string): JSX.Element => (
  <Typography variant="IMAGE_TITLE">{title}</Typography>
);

const imageSubtitle = (
  width: number,
  height: number,
  medium: string,
): JSX.Element => (
  <Stack direction="row" justifyContent="center">
    <Typography variant="IMAGE_DESC">
      {width.toString()}&quot; X {height.toString()}&quot;&nbsp;
      <strong>|</strong>
    </Typography>
    <Typography variant="IMAGE_DESC">&nbsp;{medium}</Typography>
  </Stack>
);

const ImageModal: React.FC<ModalProps> = ({
  imgSrc,
  imgTitle,
  open,
  handleClose,
}) => {
  return (
    <Modal
      aira-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Styled.ModalRoot>
          <img src={imgSrc} alt={imgTitle} />
        </Styled.ModalRoot>
      </Fade>
    </Modal>
  );
};

const ImageDisplay: React.FC<Props> = ({ category }) => {
  const { images } = React.useContext(ImageContext);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = (): void => {
    console.log(imgRef.current);
    setOpen(true);
  };
  const handleClose = (): void => setOpen(false);

  React.useEffect(() => {
    const ref = imgRef.current;
    if (ref) {
      ref.addEventListener('mouseover', (): void => console.log(ref));
    }
    return (): void =>
      ref?.removeEventListener('mouseover', (): void => console.log(ref));
  }, []);

  return (
    <>
      <Styled.Root>
        <ImageList variant="masonry" cols={3} gap={12}>
          {images
            .filter((image: IImage) => image.category === category)
            .map((image: IImage) => (
              <React.Fragment key={image.src}>
                <ImageListItem key={image.src} sx={{ cursor: 'pointer' }}>
                  <img
                    src={`${image.src}?w=256&fit=crop&auto=format`}
                    alt={image.title}
                    onClick={handleOpen}
                    loading="lazy"
                    ref={imgRef}
                  />
                  <ImageModal
                    imgSrc={image.src}
                    imgTitle={image.title}
                    open={open}
                    handleClose={handleClose}
                  />
                  <ImageListItemBar
                    position="below"
                    title={imageTitle(image.title)}
                    subtitle={imageSubtitle(
                      image.width,
                      image.height,
                      image.medium,
                    )}
                  />
                </ImageListItem>
              </React.Fragment>
            ))}
        </ImageList>
      </Styled.Root>
    </>
  );
};

export default ImageDisplay;
