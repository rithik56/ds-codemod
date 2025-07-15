import DsSlider from '@org/ui/material/Slider';

<DsSlider
  slots={{
    track: ComponentsTrack
  }}
  slotProps={{ track: componentsTrackProps }}
/>;
<DsSlider
  slots={{
    rail: SlotsRail,
    track: ComponentsTrack
  }}
  slotProps={{
    rail: slotsRailProps,
    track: componentsTrackProps
  }} />;
<DsSlider
  slots={{ rail: SlotsRail, track: SlotsTrack }}
  slotProps={{ rail: slotsRailProps, track: {
    ...componentsTrackProps,
    ...slotsTrackProps
  } }} />;
<DsSlider
  slots={{ rail: SlotsRail, track: SlotsTrack }}
  slotProps={{ track: {
    ...componentsTrackProps,
    ...slotsTrackProps
  }, rail: {
    ...componentsRailProps,
    ...slotsRailProps
  } }} />;
