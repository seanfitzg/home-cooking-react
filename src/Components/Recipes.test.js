import {
  render,
  fireEvent,
  waitFor,
  screen,
  prettyDOM,
} from '../Utils/test-utils';
import { server } from '../mocks/server';
import '@testing-library/jest-dom/extend-expect';

jest.mock('@auth0/auth0-react', () => {
  return {
    useAuth0: () => ({
      isAuthenticated: true,
      getAccessTokenSilently: () => {},
    }),
    Auth0Provider: () => null,
  };
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Recipe List', () => {
  beforeEach(() => {
    render();
  });

  test('loads the recipe list', async () => {
    await waitFor(() => {
      expect(
        screen.getByText('Test Recipe', { exact: false })
      ).toBeInTheDocument();
    });
  });

  test('should display the recipe when the edit button is clicked', async () => {
    fireEvent.click(screen.getByRole('link', { name: /edit/i }));
    await waitFor(() => {
      expect(
        screen.getByText('Test Method', { exact: false })
      ).toBeInTheDocument();
    });
  });

  test('should return to the recipe list when the cancel button is clicked', async () => {
    fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
  });

  test('should display the Add screen when add is clicked', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Add a new Recipe/i }));
    await waitFor(() => {
      expect(
        screen.getByRole('textbox', { name: /Name/i })
      ).toBeEmptyDOMElement();
    });
  });
});
