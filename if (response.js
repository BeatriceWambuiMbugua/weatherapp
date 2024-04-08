if (response.status === 200) {
      return response.json();
    } else if (response.status === 404) {
      throw new Error('City not found');
    } else {
      throw new Error('Unexpected error');
    }