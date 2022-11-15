from typing import List

from setuptools import setup, find_packages
from pathlib import Path


def get_requirements() -> List[str]:
    """Returns requirements.txt parsed to a list"""
    filename = Path(__file__).parent / 'requirements.txt'
    targets = []
    if filename.exists():
        with open(filename, 'r') as f:
            targets = f.read().splitlines()
    return targets


setup(
    name="portfolio-backend",
    version='1.0',
    author='Poojan Pradhan',
    author_email='info@poojanpradhan.com.np',
    packages=find_packages(),
    include_package_data=True,
    zip_sale=False,
    keywords="portfolio backend demo",
    install_requires=get_requirements(),
)
