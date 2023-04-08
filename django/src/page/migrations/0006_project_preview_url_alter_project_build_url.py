# Generated by Django 4.1.3 on 2023-04-08 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('page', '0005_pageinfo_profile_pic'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='preview_url',
            field=models.URLField(blank=True, help_text='Live demo preview url of the project', max_length=255),
        ),
        migrations.AlterField(
            model_name='project',
            name='build_url',
            field=models.URLField(blank=True, help_text='Github url of the project', max_length=255),
        ),
    ]
