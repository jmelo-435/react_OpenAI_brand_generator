# Generated by Django 4.1.3 on 2023-02-20 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brand_aspects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business_info',
            name='description',
            field=models.TextField(blank=True, default='default', max_length=400),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='business_info',
            name='name',
            field=models.CharField(blank=True, max_length=60),
        ),
    ]
