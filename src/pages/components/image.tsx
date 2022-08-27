import * as React from 'react';
import { Backdrop, Box, Fade, Modal, Stack, Typography } from '@mui/material';
import { IImage, ImageContext } from '../../state/imgState';
import { useWindowDimensions, withScrollToTop } from '../../common/ui/hooks';
import { styled } from '@mui/system';

const ImageWrapper = styled(Box)({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center',
  flexWrap: 'wrap',
});

const ImageGrid = styled(Box)({
  margin: '1rem 2rem',
  position: 'relative',
  transition: 'all 0.2s',
  '@media screen and (max-width: 591px)': {
    margin: '1rem 1rem',
  },
});

const ImageBox = styled(Box)({
  verticalAlign: 'middle',
  transition: 'all ease 0.2s',
  cursor: 'pointer',
  '& .image': {
    objectFit: 'contain',
    verticalAlign: 'middle',
    height: '100%',
    maxHeight: '504px',
    width: '100%',
    maxWidth: '100%',
  },
});

const ImageDetails = styled(Box)({
  display: 'flex',
  textAlign: 'center',
  flexFlow: 'column nowrap',
  marginTop: '12px',
  lineHeight: '4px',
});

const ImageTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '16px',
  flexWrap: 'wrap',
});

const ImageSubtitle = styled(Stack)({
  marginTop: '14px',
  justifyContent: 'center',
});

const ModalBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'imgWidth' && prop !== 'imgHeight',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
})<{ imgWidth: string; imgHeight: string }>(({ imgWidth, imgHeight }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '90%',
  height: '90%',
  maxHeight: '90%',

  '& .modal-img': {
    position: 'relative',
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    // maxHeight: imgHeight,
  },
}));

interface Props {
  category: string;
  hideTitles?: boolean;
}

interface ModalProps {
  source: string;
  title: string;
  imgSize: { width: string; height: string };
  open: boolean;
  handleClose: () => void;
  setSize: (e: HTMLImageElement) => void;
}

interface ImageProps {
  image: IImage;
  hideTitle?: boolean;
}

const ImageModal = (props: ModalProps): JSX.Element => {
  const { source, title, imgSize, open, handleClose } = props;
  const { width, height } = imgSize;

  return (
    <Modal
      keepMounted
      closeAfterTransition
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        },
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalBox
          imgWidth={width}
          imgHeight={height}
          className="modal-root"
          onClick={handleClose}
        >
          <img
            src={`${source}?w=${width}&fit=crop&auto=format`}
            alt={title}
            className="modal-img"
          />
        </ModalBox>
      </Fade>
    </Modal>
  );
};

const SingleImage = ({ image, hideTitle = false }: ImageProps) => {
  const { src, title, width, height, medium } = image;
  const [open, setOpen] = React.useState(false);
  const sizeRef = React.useRef({ width: '', height: '' });
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const { screenWidth, screenHeight } = useWindowDimensions();
  const scrollBarWidth = document.body.offsetWidth - document.body.clientWidth;

  const setSize = React.useCallback(
    (e: HTMLImageElement) => {
      const { current } = sizeRef;
      const { width, height } = e;
      if (current) {
        if (width > height) {
          const _width = `${screenWidth * 0.9}px`;
          sizeRef.current = { width: _width, height: 'auto' };
        } else {
          const _height = `${screenHeight * 0.9}px`;
          sizeRef.current = { width: 'auto', height: _height };
        }
      }
    },
    [screenHeight, screenWidth],
  );

  const handleOpen = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ): void => {
    e.preventDefault();

    // document.body.style.paddingRight = `${scrollBarWidth}px`;
    setOpen(true);
  };

  const handleClose = (): void => {
    // document.body.style.paddingRight = '';
    setOpen(false);
  };

  React.useEffect(() => {
    const { current } = imgRef;
    if (current) {
      setSize(current);
    }
  }, [screenWidth, setSize]);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden auto';
  }, [scrollBarWidth]);

  return (
    <>
      <ImageGrid className="image-grid">
        <ImageBox className="image-box">
          <img
            className="image"
            src={src}
            alt={title}
            onClick={handleOpen}
            ref={imgRef}
          />
        </ImageBox>
        <ImageDetails className="image-details">
          {!hideTitle && <ImageTitle variant="IMAGE_TITLE">{title}</ImageTitle>}
          <ImageSubtitle className="image-subtitle" direction="row">
            <Typography variant="IMAGE_DESC" sx={{ fontSize: '14px' }}>
              {width.toString()}&quot; X {height.toString()}
              &quot; <strong>|</strong>
            </Typography>
            <Typography
              variant="IMAGE_DESC"
              sx={{ justifySelf: 'flex-end', fontSize: '14px' }}
            >
              &nbsp;{medium}
            </Typography>
          </ImageSubtitle>
        </ImageDetails>
      </ImageGrid>
      <ImageModal
        source={src}
        title={title}
        imgSize={sizeRef.current}
        open={open}
        handleClose={handleClose}
        setSize={setSize}
      />
    </>
  );
};

const CategorizedImageDisplay: React.FC<Props> = ({
  category,
  hideTitles = false,
}) => {
  const { images } = React.useContext(ImageContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const MemoDisplay = (): JSX.Element => {
    const [filteredImgs, setFilteredImgs] = React.useState<IImage[]>();
    React.useEffect(() => {
      const imgs = images.filter((image) => image.category === category);
      for (let i = 0; i < imgs.length; i++) {
        imgs[i]['index'] = i;
      }
      setFilteredImgs(imgs);
    }, []);

    return (
      <ImageWrapper className="image-wrapper">
        {filteredImgs &&
          filteredImgs.map((image: IImage, index) => (
            <React.Fragment key={index}>
              <SingleImage image={image} hideTitle={hideTitles} />
            </React.Fragment>
          ))}
      </ImageWrapper>
    );
  };

  const WithScroll = withScrollToTop(MemoDisplay);

  return React.useMemo(() => <WithScroll />, [WithScroll]);
};

export default React.memo(CategorizedImageDisplay);
