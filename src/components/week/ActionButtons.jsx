import React from 'react';
import ActionButton from './ActionButton';
import { twMerge } from 'tailwind-merge';

const ActionButtons = ({
  events,
  setHighlightMode,
  highlightMode,
  filteredLocations,
  setFilteredLocations,
  isNight = false,
  specialEventMode,
  setSpecialEventMode,
}) => {
  const highlightEventsExist = events.some((event) => event.highlight);

  const allLocations = Array.from(
    new Set(events.map((e) => e.location).sort())
  );

  const specialEvents = Array.from(
    new Map(
      events
        .filter((event) => event.specialEvent)
        .map((event) => [event.specialEvent.name, event.specialEvent])
    ).values()
  );

  return (
    <>
      <div className='my-4 flex flex-wrap items-center gap-2'>
        {highlightEventsExist && (
          <ActionButton
            className={twMerge(
              highlightMode
                ? 'border-blackish bg-secondary text-blackish'
                : 'border-secondary bg-blackish text-whitish hover:bg-gray-900'
            )}
            onClick={() => {
              setHighlightMode(!highlightMode);
              if (!highlightMode) {
                setSpecialEventMode(null);
              }
            }}
          >
            HIGHLIGHTS
          </ActionButton>
        )}

        {specialEvents.map((specialEvent) => {
          const { name, color } = specialEvent;
          const active = specialEventMode === name;

          return (
            <ActionButton
              key={name}
              className={twMerge(
                active
                  ? `bg-[#${color}] border-blackish text-blackish`
                  : `border-[#${color}] text-whitish hover:bg-gray-900`
              )}
              onClick={() => {
                const newMode = active ? null : name;
                setSpecialEventMode(newMode);
                if (newMode) {
                  setHighlightMode(false);
                }
              }}
            >
              {specialEvent.name.toUpperCase()}
            </ActionButton>
          );
        })}
      </div>

      <div>
        {allLocations.map((location, i) => {
          const isActive = filteredLocations.includes(location);
          return (
            <ActionButton
              key={`${location}-${i}`}
              isNight={isNight}
              className={twMerge(
                isActive
                  ? 'border-blackish bg-primary text-whitish'
                  : 'border-primary bg-blackish text-whitish hover:bg-gray-900',
                'text-sm font-extralight md:text-base'
              )}
              onClick={() => {
                if (isActive) {
                  setFilteredLocations(
                    filteredLocations.filter((d) => d !== location)
                  );
                } else {
                  setFilteredLocations([...filteredLocations, location]);
                }
              }}
            >
              {location}
            </ActionButton>
          );
        })}
      </div>
    </>
  );
};

export default ActionButtons;
