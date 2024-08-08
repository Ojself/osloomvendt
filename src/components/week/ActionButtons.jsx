import React from 'react';
import ActionButton from './ActionButton';
import { twMerge } from 'tailwind-merge';

export const getLocationButtonStyling = (active) =>
  active
    ? `bg-primary border-blackish text-whitish`
    : `bg-blackish hover:bg-gray-900 text-whitish border-primary`;

export const getHighlightStyling = (active) =>
  active
    ? `bg-secondary text-blackish border-blackish`
    : `bg-blackish hover:bg-gray-900 text-whitish border-secondary`;

export const getCalendarStyling = (active) =>
  active
    ? `bg-tertiary text-blackish border-blackish`
    : `bg-blackish hover:bg-gray-900 text-whitish border-tertiary`;

const ActionButtons = ({
  events,
  setHighlightMode,
  highlightMode,
  filteredLocations,
  setFilteredLocations,
}) => {
  const highlightEventsExist = events.some((event) => event.highlight);

  const allLocations = Array.from(
    new Set(events.map((e) => e.location).sort())
  );
  return (
    <>
      <div className='my-4 flex justify-between '>
        {highlightEventsExist && (
          <ActionButton
            className={getHighlightStyling(highlightMode)}
            onClick={() => setHighlightMode(!highlightMode)}
          >
            <>HIGHIGHTS</>
          </ActionButton>
        )}
      </div>

      <div>
        {allLocations.map((location, i) => {
          const styling = getLocationButtonStyling(
            filteredLocations.includes(location)
          );

          return (
            <React.Fragment key={`${location}-${i}`}>
              <ActionButton
                className={twMerge(
                  styling,
                  'text-sm font-extralight md:text-base'
                )}
                onClick={() => {
                  if (filteredLocations.includes(location)) {
                    setFilteredLocations(
                      filteredLocations.filter((d) => d !== location)
                    );
                  } else {
                    setFilteredLocations([...filteredLocations, location]);
                  }
                }}
              >
                <>{location}</>
              </ActionButton>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default ActionButtons;
