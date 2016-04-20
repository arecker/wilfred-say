from setuptools import setup

setup(
    name='wilfred-say',
    version='3.0',
    description='Print Wilfred quotes to the commandline',
    url='http://github.com/arecker/wilfred-say',
    author='Alex Recker',
    author_email='alex@reckerfamily.com',
    license='GPLv3',
    py_modules=['wilfred'],
    entry_points={'console_scripts': ['wilfred-say = wilfred:main']}
)
