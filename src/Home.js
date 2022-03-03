import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { makeStyles } from '@material-ui/core'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Hidden from '@mui/material/Hidden'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

// Icones
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AppsIcon from '@mui/icons-material/Apps'
import HomeIcon from '@mui/icons-material/Home'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined'
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import YouTubeIcon from '@mui/icons-material/YouTube'
import VisibilityIcon from '@mui/icons-material/Visibility'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.main,
    height: '100vh'
  },
  appBar: {
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1
  },
  logo: {
    height: 25
  },
  Text: {
    FontSize: 25
  }
}))

const videos = [
  {
    id: 1,
    title: 'Bartender',
    channel: 'Lana Del Rey',
    views: '4 mi visualizações',
    date: 'há 2 anos',
    avatar: '/assets/avatar_lana.png',
    thumb: '/assets/thumb_lana.png'
  },
  {
    id: 2,
    title: 'TOUR NA NOSSA NOVA CASA',
    channel: 'Realidade Americana',
    views: '47 mil visualizações',
    date: 'há 4 dias',
    avatar: '/assets/avatar_ra.png',
    thumb: '/assets/thumb_ra.png'
  },
  {
    id: 3,
    title: 'ANA CLARA SE ARREPENDE DE TER ENTRADO NO BBB?',
    channel: 'Cortes PODDELAS [OFICIAL]',
    views: '163 mil visualizações',
    date: 'há 9 dias',
    avatar: '/assets/avatar_pod.png',
    thumb: '/assets/thumb_pod.png'
  },
  {
    id: 4,
    title:
      'Eu, a patroa e as Crianças - S05E19 - Michael Vai à Academia - 720p - Dublado',
    channel: 'jogodoido1',
    views: '7,4 mi de visualizações',
    date: 'há 6 anos',
    avatar: '/assets/avatar_jogo.png',
    thumb: '/assets/thumb_patroa.png'
  },
  {
    id: 5,
    title:
      'ASMR MUKBANG｜CHOCOLATE MARSHMALLOW RICE CAKES ICE REAM SNACK 초코찰떡 마시멜로 아이스크림 몰티져스 고디바 매그넘 EATING 먹방',
    channel: 'Mellawnie ASMR 멜라우니',
    views: '1 mi de visualizações',
    date: 'há 3 semanas',
    avatar: '/assets/avatar_choco.png',
    thumb: '/assets/thumb_choco.png'
  },
  {
    id: 6,
    title: 'Better Luck Next Time',
    channel: 'Lifehouse',
    views: '75 mil visualizações',
    date: 'há 6 anos',
    avatar: '/assets/avatar_lifehouse.png',
    thumb: '/assets/thumb_lifehouse.png'
  },
  {
    id: 7,
    title: 'Lifehouse - Somewhere Only We Know (Live @ Yahoo!)',
    channel: 'Lifehouse',
    views: '9 mi visualizações',
    date: 'há 12 anos',
    avatar: '/assets/avatar_lifehouse.png',
    thumb: '/assets/thumb_lifehouse1.png'
  },
  {
    id: 8,
    title:
      '🔥 FIZ UMA LOUCURA! CABEÇA BRANCA É UM CIDADÃO DE BEM - FREEFIRE AO VIVO CEROL',
    channel: 'Cerol',
    views: '310 mil visualizações',
    date: 'Transmitido há 20 horas',
    avatar: '/assets/avatar_cerol.png',
    thumb: '/assets/thumb_cerol.png'
  }
]
export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar
        color="inherit"
        sx={{ boxShadow: 0, zIndex: theme => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 0, pl: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <img src="/assets/preto.png" alt="logo" className={classes.logo} />
          <div className={classes.grow} />
          <IconButton size="large" color="inherit" sx={{ mr: 1, pr: 1 }}>
            <VideoCallIcon />
          </IconButton>
          <IconButton size="large" color="inherit" sx={{ mr: 1, pr: 1 }}>
            <AppsIcon />
          </IconButton>
          <IconButton size="large" color="inherit" sx={{ mr: 1 }}>
            <MoreVertIcon />
          </IconButton>
          <Button
            startIcon={<AccountCircleIcon />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            variant="permanent"
            sx={{
              width: 240,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: 240,
                boxSizing: 'border-box',
                borderRight: 'none'
              }
            }}
          >
            <Toolbar />
            <div sx={{ overflow: 'auto' }}>
              <List>
                <ListItem
                  button
                  sx={{
                    [`	.MuiListItemText-root`]: {
                      paddingTop: 0,
                      paddingBottom: 0,
                      marginTop: 0,
                      marginBottom: 0
                    }
                  }}
                >
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    sx={{
                      [`	.MuiListItemText-primary`]: {
                        fontSize: 14
                      }
                    }}
                    primary={'Início'}
                  />
                </ListItem>
                <ListItem
                  button
                  sx={{
                    [`	.MuiListItemText-root`]: {
                      paddingTop: 0,
                      paddingBottom: 0,
                      marginTop: 0,
                      marginBottom: 0
                    }
                  }}
                >
                  <ListItemIcon>{<LocalFireDepartmentIcon />}</ListItemIcon>
                  <ListItemText
                    sx={{
                      [`	.MuiListItemText-primary`]: {
                        fontSize: 14
                      }
                    }}
                    primary={'Em alta'}
                  />
                </ListItem>
                <ListItem
                  button
                  sx={{
                    [`	.MuiListItemText-root`]: {
                      paddingTop: 0,
                      paddingBottom: 0,
                      marginTop: 0,
                      marginBottom: 0
                    }
                  }}
                >
                  <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                  <ListItemText
                    sx={{
                      [`	.MuiListItemText-primary`]: {
                        fontSize: 14
                      }
                    }}
                    primary={'Inscrições'}
                  />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem
                  button
                  sx={{
                    [`	.MuiListItemText-root`]: {
                      paddingTop: 0,
                      paddingBottom: 0,
                      marginTop: 0,
                      marginBottom: 0
                    }
                  }}
                >
                  <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                  <ListItemText
                    sx={{
                      [`	.MuiListItemText-primary`]: {
                        fontSize: 14
                      }
                    }}
                    primary={'Biblioteca'}
                  />
                </ListItem>
                <ListItem
                  button
                  sx={{
                    [`	.MuiListItemText-root`]: {
                      paddingTop: 0,
                      paddingBottom: 0,
                      marginTop: 0,
                      marginBottom: 0
                    }
                  }}
                >
                  <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                  <ListItemText
                    sx={{
                      [`	.MuiListItemText-primary`]: {
                        fontSize: 14
                      }
                    }}
                    primary={'Histórico'}
                  />
                </ListItem>
              </List>
            </div>
            <Divider />
            <Box sx={{ p: 4 }}>
              <Typography variant="body2">
                Faça login para curtir vídeos, comentar e se inscrever.
              </Typography>
              <Button
                startIcon={<AccountCircleIcon />}
                variant="outlined"
                color="secondary"
                sx={{ mt: 1 }}
              >
                Fazer Login
              </Button>
            </Box>
            <Divider />
            <Typography
              variant="BUTTON TEXT"
              sx={{ pl: 1, ml: 1, mt: 2, pb: 0, fontWeight: 'bold' }}
            >
              O MELHOR DO YOUTUBE
            </Typography>
            <List>
              <ListItem
                button
                sx={{
                  [`	.MuiListItemText-root`]: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                  }
                }}
              >
                <ListItemIcon>{<LibraryMusicOutlinedIcon />}</ListItemIcon>
                <ListItemText
                  sx={{
                    [`	.MuiListItemText-primary`]: {
                      fontSize: 14
                    }
                  }}
                  primary={'Música'}
                />
              </ListItem>
              <ListItem
                button
                sx={{
                  [`	.MuiListItemText-root`]: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                  }
                }}
              >
                <ListItemIcon>{<SportsSoccerOutlinedIcon />}</ListItemIcon>
                <ListItemText
                  sx={{
                    [`	.MuiListItemText-primary`]: {
                      fontSize: 14
                    }
                  }}
                  primary={'Esportes'}
                />
              </ListItem>
              <ListItem
                button
                sx={{
                  [`	.MuiListItemText-root`]: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                  }
                }}
              >
                <ListItemIcon>{<SportsEsportsOutlinedIcon />}</ListItemIcon>
                <ListItemText
                  sx={{
                    [`	.MuiListItemText-primary`]: {
                      fontSize: 14
                    }
                  }}
                  primary={'Jogos'}
                />
              </ListItem>
              <ListItem
                button
                sx={{
                  [`	.MuiListItemText-root`]: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                  }
                }}
              >
                <ListItemIcon>{<LocalMoviesIcon />}</ListItemIcon>
                <ListItemText
                  sx={{
                    [`	.MuiListItemText-primary`]: {
                      fontSize: 14
                    }
                  }}
                  primary={'Filmes'}
                />
              </ListItem>
              <ListItem
                button
                sx={{
                  [`	.MuiListItemText-root`]: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                  }
                }}
              >
                <ListItemIcon>{<NewspaperOutlinedIcon />}</ListItemIcon>
                <ListItemText
                  sx={{
                    [`	.MuiListItemText-primary`]: {
                      fontSize: 14
                    }
                  }}
                  primary={'Notícias'}
                />
              </ListItem>
              <ListItem
                button
                sx={{
                  [`	.MuiListItemText-root`]: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                  }
                }}
              >
                <ListItemIcon>{<RadioButtonCheckedIcon />}</ListItemIcon>
                <ListItemText
                  sx={{
                    [`	.MuiListItemText-primary`]: {
                      fontSize: 14
                    }
                  }}
                  primary={'Ao vivo'}
                />
              </ListItem>
              <ListItem
                button
                sx={{
                  [`	.MuiListItemText-root`]: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                  }
                }}
              >
                <ListItemIcon>{<YouTubeIcon />}</ListItemIcon>
                <ListItemText
                  sx={{
                    [`	.MuiListItemText-primary`]: {
                      fontSize: 14
                    }
                  }}
                  primary={'Destaque'}
                />
              </ListItem>
              <ListItem
                button
                sx={{
                  [`	.MuiListItemText-root`]: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                  }
                }}
              >
                <ListItemIcon>{<VisibilityIcon />}</ListItemIcon>
                <ListItemText
                  sx={{
                    [`	.MuiListItemText-primary`]: {
                      fontSize: 14
                    }
                  }}
                  primary={'Vídeo em 360°'}
                />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>

        <Box p={4}>
          <Toolbar />
          <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 800 }}>
            Recomendados para Thalia
          </Typography>

          <Grid container spacing={2}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                </Box>
                <Typography
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  variant="body1"
                  color="textPrimary"
                >
                  {item.title}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Avatar
                    alt="avatar"
                    src={item.avatar}
                    sx={{ width: 20, height: 20 }}
                  />
                  <Typography
                    display="block"
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.channel}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  color="textSecondary"
                >{`${item.views} • ${item.date}`}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  )
}
