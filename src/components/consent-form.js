import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import { createNew } from '../reducers/consent-reducer';

const ConsentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [ads, setAds] = useState(false);
  const [statistics, setStatistics] = useState(false);

  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const canSubmit = () => name && email && (newsletter || ads || statistics);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!canSubmit()) {
      // Case enter submit?
      return false;
    }

    dispatch(createNew(name, email, { newsletter, ads, statistics }));

    setName('');
    setEmail('');
    setNewsletter(false);
    setAds(false);
    setStatistics(false);

    setMessage('saved');

    return false;
  };

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handleNewsletterChange = ({ target }) => {
    setNewsletter(target.checked);
  };

  const handleAdsChange = ({ target }) => {
    setAds(target.checked);
  };

  const handleStatisticsChange = ({ target }) => {
    setStatistics(target.checked);
  };

  return (
    <Container
      maxWidth="sm"
      className="cypress-consents-form"
    >
      <Paper>
        <Snackbar
          className="cypress-notification"
          open={message}
          autoHideDuration={5000}
          onClose={() => setMessage('')}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setMessage('')}
            severity="success"
          >
            {message}
          </Alert>
        </Snackbar>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={1} />
            <Grid item xs={5}>
              <TextField
                className="cypress-name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
                required
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                className="cypress-email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Grid>

            <FormGroup component="fieldset">
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <FormLabel component="legend">I agree to:</FormLabel>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      className="cypress-newsletter"
                      name="newsletter"
                      checked={newsletter}
                      onChange={handleNewsletterChange}
                    />
                  )}
                  label="Receive newsletter"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      className="cypress-ads"
                      name="ads"
                      checked={ads}
                      onChange={handleAdsChange}
                    />
                  )}
                  label="Be shown targeted ads"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      className="cypress-statistics"
                      name="statistics"
                      checked={statistics}
                      onChange={handleStatisticsChange}
                    />
                  )}
                  label="Contribute to anonymous visit statistics"
                />
              </Grid>
            </FormGroup>

            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button
                className="cypress-submit"
                type="submit"
                variant="contained"
                color="primary"
                disabled={!canSubmit()}
              >
                submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ConsentForm;
