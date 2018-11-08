import { StyleSheet, Platform, DeviceInfo } from 'react-native';
import { colors } from '../../constants/styleGuide';
import { deviceHeight } from '../../utilities/device';

const styles = {
  wrapper: {
    backgroundColor: colors.light.white,
    height: '100%',
  },
  splashContainer: {
    backgroundColor: colors.light.white,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
  splashBg: {
    backgroundColor: colors.light.actionBlue,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
  splashTopButtons: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 375,
    height: 97,
    zIndex: 3,
  },
  splashFigure: {
    height: 60,
    width: 153,
    left: '50%',
    marginLeft: -76,
    position: 'absolute',
  },
  splashStatic: {
    zIndex: 2,
    top: (deviceHeight() / 2) - 80,
  },
  splashAnimating: {
    zIndex: 1,
    top: '50%',
    marginTop: -30,
  },
  splashImage: {
    height: 60,
    width: 153,
  },
  splashDescription: {
    height: 60,
    width: '80%',
    left: '10%',
    top: (deviceHeight() / 2) + 20,
    position: 'absolute',
    textAlign: 'center',
  },
  splashDescriptionP: {
    color: colors.light.gray2,
    textAlign: 'center',
  },
  headingContainer: {
    backgroundColor: colors.light.white,
    position: 'absolute',
    left: 0,
    top: 20,
    zIndex: 1,
    width: '100%',
    height: '100%',
  },
  headingTopBar: {
    height: (Platform.OS === 'ios' && DeviceInfo.isIPhoneX_deprecated) ? 94 : 74,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: (Platform.OS === 'ios' && DeviceInfo.isIPhoneX_deprecated) ? 40 : 15,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: (Platform.OS === 'ios' && DeviceInfo.isIPhoneX_deprecated) ? 24 : 29,
  },
  headingSkipButton: {
    lineHeight: 30,
    height: 30,
    width: 60,
    borderWidth: 0,
    textAlign: 'right',
  },
  descriptionsWrapper: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'flex-start',
    zIndex: 3,
  },
  headingDescription: {
    padding: 0,
  },
  headingDescriptionCntr: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  headingDescriptionItem: {
    padding: 0,
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 190,
  },
  itemWrapper: {
    height: 160,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  centralized: {
    width: '100%',
    textAlign: 'center',
  },
  descriptionP: {
    color: colors.grayScale2,
    paddingTop: 20,
  },
  headingPagination: {
    top: 140,
    position: 'absolute',
    height: 13,
  },
  illustrations: {
    width: 320,
    height: 523,
    position: 'absolute',
    top: (Platform.OS === 'ios' && DeviceInfo.isIPhoneX_deprecated) ? 275 : 260,
    left: '50%',
    marginLeft: -160,
  },
  frame: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  screens: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  deviceFrame: {
    width: '100%',
    height: '100%',
  },
  activityIllustration: {
    width: 367,
    height: 429,
    top: 67,
    marginLeft: -23,
  },
  transferIllustration: {
    width: 282,
    height: 321,
    top: 120,
    marginLeft: 19,
  },
  bioAuth: {
    height: deviceHeight() - 300,
  },
  faceIdIllustration: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -170,
    marginTop: -190,
    width: 250,
    height: 250,
  },
  touchIdIllustration: {
    position: 'absolute',
    bottom: '50%',
    right: '50%',
    marginRight: -170,
    marginBottom: -150,
    width: 250,
    height: 250,
  },
  startButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navigateButton: {
    position: 'absolute',
    width: '100%',
    bottom: 40,
    borderRightWidth: 20,
    borderLeftWidth: 20,
    borderColor: 'transparent',
    zIndex: 10,
  },
};

export default StyleSheet.create(styles);
