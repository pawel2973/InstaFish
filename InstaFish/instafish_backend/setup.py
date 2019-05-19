from setuptools import setup

setup(
    name='instafish_backend',
    version='0.0.1',
    packages=['instafish',
              'instafish.migrations',
              'instafish_backend'],
    url='https://github.com/pawel2973/InstaFish',
    license='',
    author='Alan Biały',
    author_email='',
    description='',
    install_requires=['Django>=2.2',
                      'djangorestframework>=3.8.0',
                      'Pillow>=6.0.0',
                      'django-cors-middleware>=1.3.1',
                      'djangorestframework-jwt>=1.11.0'
                      ]
)
