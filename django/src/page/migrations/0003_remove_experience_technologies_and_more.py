# Generated by Django 4.1.3 on 2022-11-03 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('page', '0002_remove_pageinfo_social_pageinfo_social'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experience',
            name='technologies',
        ),
        migrations.AddField(
            model_name='experience',
            name='technologies',
            field=models.ManyToManyField(related_name='skills', to='page.skills'),
        ),
    ]