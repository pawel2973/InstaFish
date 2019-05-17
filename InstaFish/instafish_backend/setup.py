from setuptools import setup

setup(
    name='instafish_backend',
    version='',
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
                      'Pillow>=6.0.0']
)
