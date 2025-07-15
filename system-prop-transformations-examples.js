// Example 1

<DsGrid
    item
    xs={12}
    md={6}
    key={index}
    display={'flex'}
    flexDirection={'column'}
    gap={2}
    p={isMobile ? '0 !important' : '1rem !important'}
    border={
        isMobile
            ? 'none'
            : '0.5px solid var(--ds-colour-strokeDefault)'
    }
    sx={theme => ({
        [theme.breakpoints.up('md')]: {
            maxWidth: 'calc(50% - 8px)'
        }
    })}
    borderRadius={4}
    alignSelf={'flex-start'}
></DsGrid>;

<DsGrid
    key={index}
    sx={[
        {
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: isMobile ? '0 !important' : '1rem !important',

            border: isMobile
                ? 'none'
                : '0.5px solid var(--ds-colour-strokeDefault)',

            borderRadius: 4,
            alignSelf: 'flex-start'
        },
        theme => ({
            [theme.breakpoints.up('md')]: {
                maxWidth: 'calc(50% - 8px)'
            }
        })
    ]}
    size={{
        xs: 12,
        md: 6
    }}
></DsGrid>;


// Example 2

<DsStack
    flexDirection={'row'}
    justifyContent={'space-between'}
    alignItems={'center'}
    gap={4}
    sx={theme => ({
        [theme.breakpoints.up('md')]: {
            p: 4,
            border: '0.5px solid var(--ds-colour-strokeDefault)',
            borderRadius: 4,
            maxWidth: isMobile ? undefined : 'calc(50% - 8px)'
        }
    })}
></DsStack>;


<DsStack
    sx={[
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4
        },
        theme => ({
            [theme.breakpoints.up('md')]: {
                p: 4,
                border: '0.5px solid var(--ds-colour-strokeDefault)',
                borderRadius: 4,
                maxWidth: isMobile ? undefined : 'calc(50% - 8px)'
            }
        })
    ]}
></DsStack>;

// Example 3

<DsTypography
    variant="bodyRegularMedium"
    color="var(--ds-colour-typoPrimary)"
    {...consentTextProps}
>
    {consentText} {viewMoreText}
</DsTypography>;

<DsTypography
    variant="bodyRegularMedium"
    {...consentTextProps}
    sx={[
        {
            color: 'var(--ds-colour-typoPrimary)'
        },
        ...(Array.isArray(consentTextProps.sx)
            ? consentTextProps.sx
            : [consentTextProps.sx])
    ]}
>
    {consentText} {viewMoreText}
</DsTypography>;



