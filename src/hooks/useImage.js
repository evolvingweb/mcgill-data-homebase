export const IMAGE_PATH = './images';
export const OPTION_FOLDER = 'option';

const useImage = (optionNumber) => {
  const imageUrl = `${IMAGE_PATH}/${OPTION_FOLDER}-${optionNumber}/front.jpg`;

  return {
    imageUrl,
  }
};

export default useImage;
